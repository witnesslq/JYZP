package cn.edu.cqupt.ok.service.impl;

import cn.edu.cqupt.ok.dao.ProfileDao;
import cn.edu.cqupt.ok.dao.impl.ProfileDaoImpl;
import cn.edu.cqupt.ok.exception.ProfileException;
import cn.edu.cqupt.ok.po.Profile;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.ProfileService;

public class ProfileServiceImpl implements ProfileService {

	ProfileDao profileDao = new ProfileDaoImpl();
	
	@Override
	public Profile showProfileByUserId(User user) throws ProfileException {
		try {
			return profileDao.selectProfileByUserId(user);
		} catch (Exception e) {
			throw new ProfileException("查询失败");
		}
	}

	@Override
	public boolean addProfile(Profile profile) throws ProfileException {
		try {
			return profileDao.insertProfile(profile);
		} catch (Exception e) {
			throw new ProfileException("添加失败");
		}
	}
	
	@Override
	public boolean addProfileHistory(Profile profile) throws ProfileException {
		try {
			return profileDao.insertProfile(profile);
		} catch (Exception e) {
			throw new ProfileException("添加失败");
		}
	}

	@Override
	public boolean modifyProfile(Profile profile) throws ProfileException {
		try {
			return profileDao.updateProfile(profile);
		} catch (Exception e) {
			throw new ProfileException("更新失败");
		}
	}

}
