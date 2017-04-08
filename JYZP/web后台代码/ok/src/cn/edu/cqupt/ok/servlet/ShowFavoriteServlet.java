package cn.edu.cqupt.ok.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.FavoriteException;
import cn.edu.cqupt.ok.po.Favorite;
import cn.edu.cqupt.ok.service.FavoriteService;
import cn.edu.cqupt.ok.service.impl.FavoriteServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;

@WebServlet("/ShowFavoriteServlet")
public class ShowFavoriteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		FavoriteService favoriteService = new FavoriteServiceImpl();
		if(request.getParameter("Favorite") != null) {
			Favorite favorite = JsonUtils.getEntity(request.getParameter("Favorite"), Favorite.class);
			JsonObject jsonObject = JsonUtils.getJsonObject();
			try {
				if(favoriteService.selectFavorite(favorite) != null) {
					jsonObject.addProperty("msg", "已收藏");
					response.getWriter().write(jsonObject.toString());
				} else {
					jsonObject.addProperty("msg", "未收藏");
					response.getWriter().write(jsonObject.toString());
				}
			} catch (FavoriteException e) {
				jsonObject.addProperty("msg", e.getMessage());
				response.getWriter().write(jsonObject.toString());
			}
		} else {
			JsonObject jsonObject = JsonUtils.getJsonObject();
			jsonObject.addProperty("msg", "非法访问");
			response.getWriter().write(jsonObject.toString());
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
