import { Col, Row } from 'antd';
import styles from './styles.module.scss';
import namChau from '@/assets/images/home/nam-chau.png';
const InfoAbout = () => {
  return (
    <div className={styles.infoAboutWrap}>
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className={`${styles.imgNamChau} animate-glo pop-glo`}>
            <img src={namChau} alt="nam-chau" />
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <div className={`${styles.textRight} animate-glo pop-glo`}>
            <h2>Chúng tôi luôn lỗ lực đem đến cho bạn những khóa học ngoại ngữ phù hợp và chất lượng</h2>
            <p className={`${styles.textDes}`}>
              Với kim chỉ nam 'Đóng góp nâng tầm tri thức việt', chúng tôi đã xây dựng nền tảng học tập này nhằm hỗ trợ
              những bạn có nhu cầu cải thiện ngoại ngữ.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InfoAbout;
