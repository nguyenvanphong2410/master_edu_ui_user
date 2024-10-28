import React, { useEffect } from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import { Button, Flex, Input, Radio, Space } from 'antd';
import Handle from './handle';
import ErrorMessage from '@/components/ErrorMessage';
import { classNames } from '@/utils/helper';
import FloatLabel from '@/components/FloatLabel';
import { GENDER_USER } from '@/utils/constants';

function Register() {
  const {
    navigate,
    infoRegister,
    errorRegister,
    isLoadingBtnRegister,
    handleChangeInput,
    handleFocus,
    handleConfirmRegister,
  } = Handle();

  useEffect(() => {
    document.title = 'Master Edu - Đăng ký';
  }, []);

  return (
    <AuthLayout title={'Đăng ký'} description={'Trung tâm ngoại ngữ Master Edu'}>
      <div className={'input-wrap'}>
        <FloatLabel>
          <Input
            className={classNames('main-input', errorRegister.name ? 'error-input' : '')}
            placeholder="Họ và tên"
            value={infoRegister.name}
            onChange={(e) => handleChangeInput(e, 'name')}
            onFocus={(e) => handleFocus(e, 'name')}
          />
        </FloatLabel>

        <ErrorMessage message={errorRegister.name} />
      </div>
      <div className={'input-wrap'}>
        <FloatLabel>
          <Input
            className={classNames('main-input', errorRegister.email ? 'error-input' : '')}
            placeholder="Email"
            value={infoRegister.email}
            onChange={(e) => handleChangeInput(e, 'email')}
            onFocus={(e) => handleFocus(e, 'email')}
          />
        </FloatLabel>

        <ErrorMessage message={errorRegister.email} />
      </div>

      <div className={'input-wrap'}>
        <FloatLabel>
          <Input
            className={classNames('main-input', errorRegister.phone ? 'error-input' : '')}
            placeholder="Số điện thoại"
            value={infoRegister.phone}
            onChange={(e) => handleChangeInput(e, 'phone')}
            onFocus={(e) => handleFocus(e, 'phone')}
          />
        </FloatLabel>

        <ErrorMessage message={errorRegister.phone} />
      </div>

      <div className={`input-wrap`}>
        <div className={'label-wrap text-[12px] text-[#000000] ml-[20px]'}>Giới tính</div>

        <Radio.Group className='ml-[20px]' onChange={(e) => handleChangeInput(e, 'gender')} value={infoRegister.gender}>
          <Space>
            <Radio value={GENDER_USER.MALE}>Nam</Radio>
            <Radio value={GENDER_USER.FEMALE}>Nữ</Radio>
            <Radio value={GENDER_USER.OTHER}>Khác</Radio>
          </Space>
        </Radio.Group>
        
      </div>

      <div className={'input-wrap'}>
        <FloatLabel>
          <Input.Password
            className={classNames('main-input', errorRegister.password ? 'error-input' : '')}
            placeholder="Mật khẩu"
            value={infoRegister.password}
            onChange={(e) => handleChangeInput(e, 'password')}
            onFocus={(e) => handleFocus(e, 'password')}
          />
        </FloatLabel>

        <ErrorMessage message={errorRegister.password} />
      </div>
      <div className={'input-wrap'}>
        <FloatLabel>
          <Input.Password
            className={classNames('main-input', errorRegister.confirmPassword ? 'error-input' : '')}
            placeholder="Xác nhận mật khẩu"
            value={infoRegister.confirmPassword}
            onChange={(e) => handleChangeInput(e, 'confirmPassword')}
            onFocus={(e) => handleFocus(e, 'confirmPassword')}
          />
        </FloatLabel>

        <ErrorMessage message={errorRegister.confirmPassword} />
      </div>

      <Flex vertical gap="small">
        <Button
          loading={isLoadingBtnRegister}
          type="primary"
          size="large"
          className="main-btn-primary"
          block
          onClick={handleConfirmRegister}
        >
          Đăng ký
        </Button>
      </Flex>

      <div className="text-center mt-5 n:text-xs md:text-sm">
        Trở lại trang
        <span className="text-blue-60 cursor-pointer ml-1" onClick={() => navigate('/login')}>
          Đăng nhập
        </span>
      </div>
    </AuthLayout>
  );
}

export default Register;
