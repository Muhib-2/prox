import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Card.module.css';

export default function Card({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  image,
  className = ''
}) {
  const content = (
    <>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        {Icon && <div className={styles.iconWrapper}><Icon size={32} /></div>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {href && (
          <div className={styles.action}>
            <span className={styles.linkText}>Learn more</span>
            <ArrowRight size={16} className={styles.arrow} />
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${styles.interactive} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${styles.card} ${className}`}>
      {content}
    </div>
  );
}
