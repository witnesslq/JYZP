package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import cn.edu.cqupt.ok.dao.ProfileDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.Profile;
import cn.edu.cqupt.ok.po.User;

public class ProfileDaoImpl extends JDBCTemplate<Profile> implements ProfileDao {

	@Override
	public Profile selectProfileByUserId(User user) {
		Profile profile = new Profile();
		profile.setKeyInt(user.getUserId());
		String sql = "select * from profile where user_userId = ?";
		return this.selectOneByIntConditionTemplate(profile, sql);
	}

	@Override
	public boolean insertProfile(Profile profile) {
		String sql = "insert into profile (sex,phoneNumber,school,major,graduateDate,degree,user_userId) values (?,?,?,?,?,?,?)";
		return this.createTemplate(profile, sql);
	}

	@Override
	public boolean updateProfile(Profile profile) {
		String sql = "update profile set sex = ?, phoneNumber = ?, school = ?, major = ?, graduateDate = ?, degree = ? where user_userId = ? and profileId = ?";
		return this.updateTemplate(profile, sql);
	}
	
	@Override
	public Profile selectOneOperation(Profile t, PreparedStatement ps) throws Exception {
		return null;
	}
	
	@Override
	public Profile selectOneByStringConditionOperation(Profile t, PreparedStatement ps) {
		return null;
	}

	@Override
	public Profile selectOneByIntConditionOperation(Profile t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		ps.setInt(1, t.getKeyInt());
		rs = ps.executeQuery();
		if(rs.next()) {
			Profile profile = new Profile();
			profile.setProfileId(rs.getInt("profileId"));
			profile.setSex(rs.getString("sex"));
			profile.setPhoneNumber(rs.getString("phoneNumber"));
			profile.setSchool(rs.getString("school"));
			profile.setMajor(rs.getString("major"));
			profile.setGraduateDate(rs.getString("graduateDate"));
			profile.setDegree(rs.getString("degree"));
			profile.setUserId(rs.getInt("user_userId")); 
			return profile;
		}
		return null;
	}

	@Override
	public List<Profile> selectAllOperation(Profile t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<Profile> selectAllByStringConditionOperation(Profile t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public List<Profile> selectAllByIntConditionOperation(Profile t, PreparedStatement ps) {
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
	public boolean deleteOperation(Profile t, PreparedStatement ps) {
		return false;
	}

	@Override
	public boolean updateOperation(Profile t, PreparedStatement ps) throws Exception {
		ps.setString(1, t.getSex()); 
		ps.setString(2, t.getPhoneNumber()); 
		ps.setString(3, t.getSchool()); 
		ps.setString(4, t.getMajor()); 
		ps.setString(5, t.getGraduateDate()); 
		ps.setString(6, t.getDegree()); 
		ps.setInt(7, t.getUserId());
		ps.setInt(8, t.getProfileId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

}
