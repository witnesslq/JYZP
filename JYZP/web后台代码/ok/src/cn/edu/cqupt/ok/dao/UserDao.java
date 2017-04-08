package cn.edu.cqupt.ok.dao;

import cn.edu.cqupt.ok.po.User;

public interface UserDao {
	public User selectUserByUsername(User user);
	public boolean inserUser(User user);
	public boolean deleteUser(User user);
}
