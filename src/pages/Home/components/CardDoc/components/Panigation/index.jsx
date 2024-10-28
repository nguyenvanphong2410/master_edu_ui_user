import React from 'react';
import styles from './style.module.scss';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setDataFilterCourse } from '@/states/modules/package';
import { handleGetListDataPackages } from '@/api/package';

function PaginationDocument() {
    const dispatch = useDispatch();

    const dataFilter = useSelector(state => state.package.dataFilter)
    const paginationListDocument = useSelector((state) => state.package.paginationListCourse);


    const handleChangePage = (e) => {
        dispatch(setDataFilterCourse({ ...dataFilter, page: e }))
        dispatch(handleGetListDataPackages());
    }
    return (
        <div className={styles.paginationWrap}>
            <Pagination
                responsive
                onChange={handleChangePage}
                current={paginationListDocument.currentPage}
                pageSize={paginationListDocument.perPage || 10}
                total={paginationListDocument.totalRecord}
                showSizeChanger={false}
            />

        </div>
    )
}

export default PaginationDocument;