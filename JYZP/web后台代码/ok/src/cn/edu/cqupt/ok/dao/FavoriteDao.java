package cn.edu.cqupt.ok.dao;

import java.util.List;

import cn.edu.cqupt.ok.po.Favorite;
import cn.edu.cqupt.ok.po.User;

public interface FavoriteDao {
	public Favorite selectFavorite(Favorite favorite);
	public List<Favorite> selectAllFavoriteByUserId(User user);
	public boolean insertFavorite(Favorite favorite);
	public boolean deleteFavorite(Favorite favorite);	
}
