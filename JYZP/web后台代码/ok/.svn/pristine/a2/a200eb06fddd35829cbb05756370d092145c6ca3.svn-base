package cn.edu.cqupt.ok.service;

import java.util.List;

import cn.edu.cqupt.ok.exception.PostException;
import cn.edu.cqupt.ok.po.Post;
import cn.edu.cqupt.ok.po.PostLabel;
import cn.edu.cqupt.ok.po.User;

public interface PostService {
	public int showPostCount() throws PostException;
	public int showPostCombineConditionCount(Post post) throws PostException; 
	public int showPostByLabelNameCount(String labelNames) throws PostException; 
	public Post showOnePostByPostId(Post post)  throws PostException; 
	public List<Post> showPosts(int page) throws PostException;
	public List<Post> showPostsByUserId(User user) throws PostException;
	public List<Post> showPostsByLabelId(Post post) throws PostException;
	public List<Post> showPostsByLabelName(String labeNames, int page) throws PostException;
	public List<Post> selectPostsByPostId(List<Integer> list) throws PostException; 
	public List<Post> showPostsByCombineCondition(Post post, int page) throws PostException;
	public boolean addPost(Post post) throws PostException;
	public boolean addPostLabel(PostLabel postLabel) throws PostException;
	public boolean removePost(Post post) throws PostException;
	
}
