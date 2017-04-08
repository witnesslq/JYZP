package cn.edu.cqupt.ok.service.impl;

import java.util.List;

import cn.edu.cqupt.ok.dao.FavoriteDao;
import cn.edu.cqupt.ok.dao.impl.FavoriteDaoImpl;
import cn.edu.cqupt.ok.exception.FavoriteException;
import cn.edu.cqupt.ok.po.Favorite;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.FavoriteService;

public class FavoriteServiceImpl implements FavoriteService {

	FavoriteDao favoriteDao = new FavoriteDaoImpl();
	
	@Override
	public Favorite selectFavorite(Favorite favorite) throws FavoriteException {
		try {
			return favoriteDao.selectFavorite(favorite);
		} catch (Exception e) {
			throw new FavoriteException("查询失败");
		}
	}
	
	@Override
	public List<Favorite> selectAllFavoriteByUserId(User user) throws FavoriteException {
		try {
			return favoriteDao.selectAllFavoriteByUserId(user);
		} catch (Exception e) {
			throw new FavoriteException("查询失败");
		}
	}
	
	@Override
	public boolean addFavorite(Favorite favorite) throws FavoriteException {
		try {
			return favoriteDao.insertFavorite(favorite);
		} catch (Exception e) {
			throw new FavoriteException("添加失败");
		}
	}

	@Override
	public boolean deleteFavorite(Favorite favorite) throws FavoriteException {
		try {
			return favoriteDao.deleteFavorite(favorite);
		} catch (Exception e) {
			throw new FavoriteException("删除失败");
		}
	}
	
}
