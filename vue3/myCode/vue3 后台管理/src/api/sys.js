import request from '@/utils/request';

/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data,
    headers: {
      icode: 'FF85648BBE0A3714',
    },
  });
};

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
  });
};
