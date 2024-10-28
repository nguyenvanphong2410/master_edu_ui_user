import { useSelector } from 'react-redux';
import { CaretRightOutlined } from '@ant-design/icons';
import { Avatar, Collapse, theme } from 'antd';
import TableStudentOfClass from './components/TableStudentOfClass';
import styles from './styles.module.scss';
import './styles.scss';

const InProgressClassOfCourseOfUser = () => {
  const dataClassOfCourseOfUser = useSelector((state) => state.myCourse.dataClassOfCourseOfUser);

  const { token } = theme.useToken();
  const getItems = (panelStyle) => [
    {
      key: '1',
      label: <p className='font-semibold'>Danh sách học viên</p>,
      children: <TableStudentOfClass dataClassOfCourseOfUser={dataClassOfCourseOfUser} />,
      style: panelStyle,
    },
  ];

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <>
      {/* <div className={`${styles.infoClassWrap}`}>
        <p className={`${styles.title}`}>Khóa học:</p>
        <span className={`${styles.text}`}>{dataClassOfCourseOfUser?.name}</span>
        <p className={`${styles.title}`}>Giáo viên: {dataClassOfCourseOfUser?.teacher?.name}</p>
      </div> */}
      <div className={`${styles.contentInfoWrap}`}>
        <div className={`${styles.itemInfo}`}>
          <span className={`${styles.fieldName}`}>Khóa học:</span>
          <span className={`${styles.content}`}>{dataClassOfCourseOfUser?.name}</span>
        </div>
      </div>
      <div className={`${styles.contentInfoWrap} mt-3 mb-3`}>
        <div className={`${styles.itemInfo}`}>
          <span className={`${styles.fieldName} mt-2`}>Giáo viên:</span>
          <span className={`${styles.content}`}>
            <div className={`flex`}>
              <Avatar
                className={`avatar-user shadow`}
                crossOrigin="anonymous"
                src={dataClassOfCourseOfUser?.teacher?.avatar ? dataClassOfCourseOfUser?.teacher?.avatar : ''}
              />
              <div className={`ml-[10px] font-medium`}>
                <div className={`name-user cursor-pointer`}>{dataClassOfCourseOfUser?.teacher?.name}</div>
                <a className="email-user" href={`mailto:${dataClassOfCourseOfUser?.teacher?.email}`}>
                  {dataClassOfCourseOfUser?.teacher?.email}
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className={`${styles.contentInfoWrap}`}>
        <div className={`${styles.itemInfo}`}>
          <span className={`${styles.fieldName}`}>Tài liệu:</span>
          <a href={dataClassOfCourseOfUser?.file_record} target="_blank" rel="noopener noreferrer">
            <span className={`${styles.content}`}>
              {dataClassOfCourseOfUser?.file_record !== 'null' ? <span className='text-blue-55 italic underline'>Xem tài liệu lớp học tại đây...</span> : 'Đang cập nhật'}
            </span>
          </a>
        </div>
      </div>
      <Collapse
        className="mt-4"
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
    </>
  );
};

export default InProgressClassOfCourseOfUser;
