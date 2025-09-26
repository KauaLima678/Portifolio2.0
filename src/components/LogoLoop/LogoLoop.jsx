import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import style from './LogoLoop.module.css';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = value => (typeof value === 'number' ? `${value}px` : value ?? undefined);

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => observers.forEach(obs => obs?.disconnect());
  }, dependencies);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    let remaining = images.length;
    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };
    images.forEach(img => {
      if (img.complete) handleLoad();
      else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      });
    };
  }, dependencies);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (seqWidth > 0) offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;

    const animate = timestamp => {
      if (lastRef.current === null) lastRef.current = timestamp;
      const deltaTime = Math.max(0, timestamp - lastRef.current) / 1000;
      lastRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easing = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

const LogoLoop = memo(({
  logos = [],
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className,
  style: styleProp
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => Math.abs(speed) * (direction === 'left' ? 1 : -1), [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect()?.width ?? 0;
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const cssVariables = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
  }), [gap, logoHeight, fadeOutColor]);

  const rootClassName = useMemo(() =>
    [style.logoloop, fadeOut && style['logoloop--fade'], scaleOnHover && style['logoloop--scale-hover'], className]
      .filter(Boolean).join(' '), [fadeOut, scaleOnHover, className]
  );

  const handleMouseEnter = useCallback(() => pauseOnHover && setIsHovered(true), [pauseOnHover]);
  const handleMouseLeave = useCallback(() => pauseOnHover && setIsHovered(false), [pauseOnHover]);

  const renderLogoItem = useCallback((item, key) => {
    const isNodeItem = 'node' in item;
    const content = isNodeItem
      ? <span className={style.logoloop__node}>{item.node}</span>
      : <img src={item.src} alt={item.alt ?? ''} height={item.height ?? logoHeight} />;
    return (
      <li className={style.logoloop__item} key={key}>
        {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{content}</a> : content}
      </li>
    );
  }, [logoHeight]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, copyIndex) => (
      <ul className={style.logoloop__list} key={copyIndex} ref={copyIndex === 0 ? seqRef : undefined}>
        {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
      </ul>
    )), [copyCount, logos, renderLogoItem]
  );

  const containerStyle = useMemo(() => ({ width: toCssLength(width), ...cssVariables, ...styleProp }), [width, cssVariables, styleProp]);

  return (
    <div
      ref={containerRef}
      className={rootClassName}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={ariaLabel}
    >
      <div className={style.logoloop__track} ref={trackRef}>
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
