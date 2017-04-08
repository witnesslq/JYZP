package cn.edu.cqupt.ok.service;

import java.util.List;

import cn.edu.cqupt.ok.exception.FavoriteException;
import cn.edu.cqupt.ok.po.Favorite;
import cn.edu.cqupt.ok.po.User;

public interface FavoriteService {
	public Favorite selectFavorite(Favorite favorite) throws FavoriteException;
	public List<Favorite> selectAllFavoriteByUserId(User user) throws FavoriteException;
	public boolean addFavorite(Favorite favorite) throws FavoriteException;
	public boolean deleteFavorite(Favorite favorite) throws FavoriteException;
}
