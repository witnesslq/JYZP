package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.edu.cqupt.ok.dao.FavoriteDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.Favorite;
import cn.edu.cqupt.ok.po.User;

public class FavoriteDaoImpl extends JDBCTemplate<Favorite> implements FavoriteDao {

	@Override
	public Favorite selectFavorite(Favorite favorite) {
		String sql = "select * from favorite where user_userId = ? and post_postId = ?";
		return this.selectOneTemplate(favorite, sql);
	}
	
	@Override
	public List<Favorite> selectAllFavoriteByUserId(User user) {
		String sql = "select * from favorite where user_userId = ? ";
		Favorite favorite = new Favorite();
		favorite.setKeyInt(user.getUserId());
		return this.selectAllByIntConditionTemplate(favorite, sql);
	}
	
	@Override
	public boolean insertFavorite(Favorite favorite) {
		String sql = "insert into favorite values(?,?)";
		return this.createTemplate(favorite, sql);
	}

	@Override
	public boolean deleteFavorite(Favorite favorite) {
		String sql = "delete from favorite where user_userId = ? and post_postId = ?";
		return this.deleteTemplate(favorite, sql);
	}

	@Override
	public Favorite selectOneOperation(Favorite t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		ps.setInt(1, t.getUserId());
		ps.setInt(2, t.getPostId());
		rs = ps.executeQuery();
		while(rs.next()) {
			Favorite favorite = new Favorite();
			favorite.setUserId(rs.getInt("user_userId"));
			favorite.setPostId(rs.getInt("post_postId"));
			return favorite;
		}
		return null;
	}

	@Override
	public Favorite selectOneByStringConditionOperation(Favorite t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public Favorite selectOneByIntConditionOperation(Favorite t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<Favorite> selectAllOperation(Favorite t, PreparedStatement ps) throws SQLException {
		return null;
	}

	@Override
	public List<Favorite> selectAllByStringConditionOperation(Favorite t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public List<Favorite> selectAllByIntConditionOperation(Favorite t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		ps.setInt(1, t.getKeyInt());
		rs = ps.executeQuery();
		List<Favorite> list = new ArrayList<Favorite>();
		while(rs.next()) {
			Favorite favorite = new Favorite();
			favorite.setUserId(rs.getInt("user_userId"));
			favorite.setPostId(rs.getInt("post_postId"));
			list.add(favorite);
		}
		return list;
	}

	@Override
	public boolean createOperation(Favorite t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getUserId());
		ps.setInt(2, t.getPostId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean deleteOperation(Favorite t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getUserId());
		ps.setInt(2, t.getPostId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean updateOperation(Favorite t, PreparedStatement ps) throws Exception {
		return false;
	}
	
}
