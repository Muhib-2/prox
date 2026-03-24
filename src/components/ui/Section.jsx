import styles from './Section.module.css';

export default function Section({ 
  children, 
  background = 'white', 
  className = '',
  id
}) {
  return (
    <section id={id} className={`${styles.section} ${styles[background]} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
