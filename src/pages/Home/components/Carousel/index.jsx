import slide1 from '@/assets/images/banner/slide-1.jpg';
import slide2 from '@/assets/images/banner/slide-2.jpg';
import slide4 from '@/assets/images/banner/slide-4.jpg';
import slide5 from '@/assets/images/banner/slide-5.jpg';
import styles from './styles.module.scss';
import {Carousel} from 'antd';

const CarouselCpn = () => {

    return (
        <>
        <div className={styles.sliderHeading}>
            <Carousel className={`animate-glo pop-glo ${styles.carouselWrap}`} autoplay autoplaySpeed={2000}>
              <div>
                <img className={styles.imgSlide} src={'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/03/hinh-nen-desktop.jpg'} alt="" />
              </div>
              <div>
                <img className={styles.imgSlide} src={'https://thuthuatnhanh.com/wp-content/uploads/2023/06/hinh-nen-may-tinh-4k-don-gian-ma-dep-chill.jpg'} alt="" />
              </div>
              <div>
                <img className={styles.imgSlide} src={'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/183983/Originals/cac-mau-background-4k-cuc-sac-net-1.png'} alt="" />
              </div>
              <div>
                <img className={styles.imgSlide} src={'https://www.didongmy.com/vnt_upload/news/03_2024/hinh-nen-4k-la-gi-Didongmy.jpg'} alt="" />
              </div>
            </Carousel>
          </div>
        </>
    )
}

export default CarouselCpn;