package cn.edu.cqupt.ok.service.impl;

import java.util.List;

import cn.edu.cqupt.ok.dao.PostCountDao;
import cn.edu.cqupt.ok.dao.PostDao;
import cn.edu.cqupt.ok.dao.PostLabelDao;
import cn.edu.cqupt.ok.dao.impl.PostCountDaoImpl;
import cn.edu.cqupt.ok.dao.impl.PostDaoImpl;
import cn.edu.cqupt.ok.dao.impl.PostLabelDaoImpl;
import cn.edu.cqupt.ok.exception.PostException;
import cn.edu.cqupt.ok.po.Post;
import cn.edu.cqupt.ok.po.PostLabel;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.PostService;

public class PostServiceImpl implements PostService {
	
	PostDao postDao = new PostDaoImpl();
	PostLabelDao postLabelDao = new PostLabelDaoImpl();
	PostCountDao postCountDao = new PostCountDaoImpl();
	
	@Override
	public int showPostCount() throws PostException {
		try {
			return postCountDao.showPostCount();
		} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}
	
	@Override
	public int showPostCombineConditionCount(Post post) throws PostException {
		try {
			return postCountDao.showPostCombineConditionCount(post);
		} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}
	
	@Override
	public int showPostByLabelNameCount(String labelNames) throws PostException {
		try {
			return postCountDao.showPostByLabelNameCount(labelNames);
		} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}
	
	@Override
	public List<Post> showPosts(int page) throws PostException {
		try {
			return postDao.selectAllPosts(page);
		} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}

	@Override
	public List<Post> showPostsByUserId(User user) throws PostException {
		try {
			return postDao.selectPostsByUserId(user);
		} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}

	@Override
	public List<Post> showPostsByLabelId(Post post) throws PostException {
		return null;
	}
	
	@Override
	public List<Post> showPostsByLabelName(String postLabelNames, int page) throws PostException {
		try {
			return postDao.selectPostsByLabelName(postLabelNames, page);
			} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}
	
	@Override
	public List<Post> selectPostsByPostId(List<Integer> list) throws PostException {
		try {
			return postDao.selectPostsByPostId(list);
			} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}

	@Override
	public List<Post> showPostsByCombineCondition(Post post, int page) throws PostException {
		try {
			return postDao.selectPostsByCombineCondition(post, page);
			} catch (Exception e) {
			throw new PostException("查询失败");
		}
	}

	@Override
	public boolean addPost(Post post) throws PostException {
		try {
			return postDao.insertPost(post);
			} catch (Exception e) {
			throw new PostException("添加失败");
		}
	}

	@Override
	public boolean addPostLabel(PostLabel postLabel) throws PostException {
		try {
			return postLabelDao.insertPostLable(postLabel);
			} catch (Exception e) {
			throw new PostException("添加失败");
		}
	}

	@Override
	public boolean removePost(Post post) throws PostException {
		try {
			return postDao.deletePostByPostId(post);
			} catch (Exception e) {
			throw new PostException("移除失败");
		}
	}

}
