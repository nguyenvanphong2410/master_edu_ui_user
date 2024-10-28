import { Col, Row } from 'antd';
import styles from './styles.module.scss';
import InlineSVG from 'react-inlinesvg';
import ArrowRightIcon from '@/assets/images/icons/duotone/arrow-right.svg';
import Ear from '@/assets/images/icons/solid/ear.svg';
import Speak from '@/assets/images/icons/solid/lip.svg';
import Read from '@/assets/images/icons/solid/glass.svg';
import Write from '@/assets/images/icons/solid/write.svg';

const StudyRoadmap = () => {
  return (
    <div className={styles.studyRoadmapWrap}>
      <h2 className={`${styles.title} animate-glo pop-glo`}>Lộ trình học rõ ràng với các kĩ năng</h2>
      <Row gutter={[30, 40]}>
        <Col md={6} lg={6}>
          <div className={`${styles.skill1} ${styles.bg1} animate-glo pop-glo`}>
            <InlineSVG className={styles.iconSkill} src={Ear}  alt="img" />
            <div className={styles.wrapTextAndIcon}>
            <p className={styles.textSkill}>Nghe</p>
            <InlineSVG className={styles.iconSkill2} src={ArrowRightIcon}  alt="img" />
            </div>
          </div>
        </Col>

        <Col md={6} lg={6}>
          <div className={`${styles.skill1} ${styles.bg2} animate-glo pop-glo`}>
            <InlineSVG className={styles.iconSkill} src={Speak}  alt="img" />
            <div className={styles.wrapTextAndIcon}>
            <p className={styles.textSkill}>Nói</p>
            <InlineSVG className={styles.iconSkill2} src={ArrowRightIcon}  alt="img" />
            </div>
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div className={`${styles.skill1} ${styles.bg3} animate-glo pop-glo`}>
            <InlineSVG className={styles.iconSkill} src={Read}  alt="img" />
            <div className={styles.wrapTextAndIcon}>
            <p className={styles.textSkill}>Đọc</p>
            <InlineSVG className={styles.iconSkill2} src={ArrowRightIcon}  alt="img" />
            </div>
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div className={`${styles.skill1} ${styles.bg4} animate-glo pop-glo`}>
            <InlineSVG className={styles.iconSkill} src={Write}  alt="img" />
            <div className={styles.wrapTextAndIcon}>
            <p className={styles.textSkill}>Viết</p>
            <InlineSVG className={styles.iconSkill2} src={ArrowRightIcon}  alt="img" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StudyRoadmap;
