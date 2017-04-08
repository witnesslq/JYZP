package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import cn.edu.cqupt.ok.dao.UserDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.User;

public class UserDaoImpl extends JDBCTemplate<User> implements UserDao {
	
	@Override
	public User selectUserByUsername(User user) {
		user.setKeyString(user.getUserName());
		String sql = "select * from user where userName = ?";
		return this.selectOneByStringConditionTemplate(user, sql);
	}

	@Override
	public boolean inserUser(User user) {
		String sql = "insert into user values(?,?,?,?)";
		return this.createTemplate(user, sql);
	}

	@Override
	public boolean deleteUser(User user) {
		String sql = "delete from user where userId = ?";
		return this.deleteTemplate(user, sql);
	}
	
	@Override
	public User selectOneOperation(User t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public User selectOneByStringConditionOperation(User t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		ps.setString(1, t.getKeyString());
		rs = ps.executeQuery();
		while(rs.next()) {
			User user = new User();
			user.setUserId(rs.getInt("userId"));
			user.setUserName(rs.getString("userName"));
			user.setPassword(rs.getString("password"));
			user.setUserEmail(rs.getString("userEmail"));
			return user;
		}
		return null;
	}
	
	@Override
	public User selectOneByIntConditionOperation(User t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<User> selectAllOperation(User t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<User> selectAllByStringConditionOperation(User t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<User> selectAllByIntConditionOperation(User t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public boolean createOperation(User t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getUserId());
		ps.setString(2, t.getUserName());
		ps.setString(3, t.getPassword());
		ps.setString(4, t.getUserEmail());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean deleteOperation(User t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getUserId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean updateOperation(User t, PreparedStatement ps) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}
}
