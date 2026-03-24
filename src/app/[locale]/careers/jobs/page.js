import { getTranslations } from '../../../../lib/i18n';
import JobsClient from './JobsClient';
import styles from '../page.module.css';

export default function JobsPage({ params: { locale } }) {
  const t = getTranslations(locale);
  const c = t.careers;

  return (
    <div className={styles.page}>
      <JobsClient c={c} />
    </div>
  );
}
