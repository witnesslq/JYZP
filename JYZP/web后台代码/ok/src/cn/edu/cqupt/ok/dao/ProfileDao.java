package cn.edu.cqupt.ok.dao;

import cn.edu.cqupt.ok.po.Profile;
import cn.edu.cqupt.ok.po.User;

public interface ProfileDao {
	public Profile selectProfileByUserId(User user);
	public boolean insertProfile(Profile profile);
	public boolean updateProfile(Profile profile);
}
