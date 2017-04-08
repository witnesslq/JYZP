package cn.edu.cqupt.ok.service.impl;

import cn.edu.cqupt.ok.dao.UserDao;
import cn.edu.cqupt.ok.dao.impl.UserDaoImpl;
import cn.edu.cqupt.ok.exception.UserException;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.UserService;

public class UserServiceImpl implements UserService {
	UserDao userDao = new UserDaoImpl();
	@Override
	public void register(User user) throws UserException {
		User _user = userDao.selectUserByUsername(user);
		if(_user != null) throw new UserException("该用户名已注册");
		if(_user == null) {
			userDao.inserUser(user);
		}
	}

	@Override
	public User login(User user) throws UserException{
		User _user = userDao.selectUserByUsername(user);
		if(_user == null) throw new UserException("该用户名未注册");
		if(!user.getPassword().equals(_user.getPassword())) throw new UserException("密码错误");
		return _user;
	}

}
