package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.util.List;

import cn.edu.cqupt.ok.dao.ProfileDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.Profile;
import cn.edu.cqupt.ok.po.User;

public class ProfileHistoryDaoImpl extends JDBCTemplate<Profile>implements ProfileDao {

	@Override
	public Profile selectProfileByUserId(User user) {
		return null;
	}

	@Override
	public boolean insertProfile(Profile profile) {
		String sql = "insert into profile_history (sex,phoneNumber,school,major,graduateDate,degree,user_userId) values (?,?,?,?,?,?,?)";
		return this.createTemplate(profile, sql);
	}

	@Override
	public boolean updateProfile(Profile profile) {
		return false;
	}

	@Override
	public Profile selectOneOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public Profile selectOneByStringConditionOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public Profile selectOneByIntConditionOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<Profile> selectAllOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<Profile> selectAllByStringConditionOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<Profile> selectAllByIntConditionOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public boolean createOperation(Profile t, PreparedStatement ps) throws Exception {
		ps.setString(1, t.getSex()); 
		ps.setString(2, t.getPhoneNumber()); 
		ps.setString(3, t.getSchool()); 
		ps.setString(4, t.getMajor()); 
		ps.setString(5, t.getGraduateDate()); 
		ps.setString(6, t.getDegree()); 
		ps.setInt(7, t.getUserId()); 
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean deleteOperation(Profile t, PreparedStatement ps) throws Exception {
		return false;
	}

	@Override
	public boolean updateOperation(Profile t, PreparedStatement ps) throws Exception {
		return false;
	}

}
