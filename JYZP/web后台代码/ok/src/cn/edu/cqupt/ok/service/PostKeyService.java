package cn.edu.cqupt.ok.service;

import java.util.List;

import cn.edu.cqupt.ok.exception.PostKeyException;

public interface PostKeyService {
	public List<String> selectKeyListPositionFirstType() throws PostKeyException;
	public List<String> selectKeyListPositionName() throws PostKeyException;
	public List<String> selectKeyListCity() throws PostKeyException;
	public List<String> selectKeyListSalary() throws PostKeyException;
	public List<String> selectKeyListWorkYear() throws PostKeyException;
}
