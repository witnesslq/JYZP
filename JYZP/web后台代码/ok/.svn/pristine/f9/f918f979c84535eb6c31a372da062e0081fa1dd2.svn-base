package cn.edu.cqupt.ok.service.impl;

import java.util.List;

import cn.edu.cqupt.ok.dao.PostKeyDao;
import cn.edu.cqupt.ok.dao.impl.PostKeyDaoImpl;
import cn.edu.cqupt.ok.exception.PostKeyException;
import cn.edu.cqupt.ok.service.PostKeyService;

public class PostKeyServiceImpl implements PostKeyService {

	PostKeyDao postKeyDao = new PostKeyDaoImpl();
	
	@Override
	public List<String> selectKeyListPositionFirstType() throws PostKeyException {
		try {
			return postKeyDao.selectKeyListPositionFirstType();
		} catch(Exception e) {
			throw new PostKeyException("查询失败");
		}
	}

	@Override
	public List<String> selectKeyListPositionName() throws PostKeyException {
		try {
			return postKeyDao.selectKeyListPositionName();
		} catch(Exception e) {
			throw new PostKeyException("查询失败");
		}
	}

	@Override
	public List<String> selectKeyListCity() throws PostKeyException {
		try {
			return postKeyDao.selectKeyListCity();
		} catch(Exception e) {
			throw new PostKeyException("查询失败");
		}
	}

	@Override
	public List<String> selectKeyListSalary() throws PostKeyException {
		try {
			return postKeyDao.selectKeyListSalary();
		} catch(Exception e) {
			throw new PostKeyException("查询失败");
		}
	}

	@Override
	public List<String> selectKeyListWorkYear() throws PostKeyException {
		try {
			return postKeyDao.selectKeyListWorkYear();
		} catch(Exception e) {
			throw new PostKeyException("查询失败");
		}
	}



}
