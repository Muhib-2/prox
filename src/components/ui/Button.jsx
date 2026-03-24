import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) {
  const btnClass = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
