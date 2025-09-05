import { useIntl } from 'react-intl';
import styles from './index.less';

const EventsPage = () => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <h1>{intl.formatMessage({ id: 'nav.events' })}</h1>
      <p>这是活动页面的占位内容。未来将展示各类IP相关活动信息。</p>
    </div>
  );
};

export default EventsPage;