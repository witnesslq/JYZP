package cn.edu.cqupt.ok.dao;

import java.util.List;

import cn.edu.cqupt.ok.po.Post;
import cn.edu.cqupt.ok.po.User;

public interface PostDao {
	public Post selectOnePostByPostId(Post post);
	public List<Post> selectAllPosts(int page);
	public List<Post> selectPostsByLabelName(String postLabelNames, int page);
	public List<Post> selectPostsByUserId(User user);
	public List<Post> selectPostsByPostId(List<Integer> list); 
	public List<Post> selectPostsByCombineCondition(Post post, int page) ;
	public boolean insertPost(Post post);
	public boolean deletePostByPostId(Post post);
}
