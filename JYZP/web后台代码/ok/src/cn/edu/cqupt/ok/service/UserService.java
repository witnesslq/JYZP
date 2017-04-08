package cn.edu.cqupt.ok.service;

import cn.edu.cqupt.ok.exception.UserException;
import cn.edu.cqupt.ok.po.User;

public interface UserService {
	public void checkUserName(User user) throws UserException;
	public void register(User user) throws UserException;
	public User login(User user) throws UserException;
}
