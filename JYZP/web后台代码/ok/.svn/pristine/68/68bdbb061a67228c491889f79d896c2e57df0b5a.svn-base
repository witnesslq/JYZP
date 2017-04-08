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

@WebServlet("/AddFavoriteServlet")
public class AddFavoriteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("Favorite") != null) {
			Favorite favorite = JsonUtils.getEntity(request.getParameter("Favorite"), Favorite.class);
			FavoriteService favoriteService = new FavoriteServiceImpl();
			
			try {
				boolean bool = favoriteService.addFavorite(favorite);
				if(bool) {
					jsonObject.addProperty("msg", "添加成功");
					response.getWriter().write(jsonObject.toString());
				} else if(!bool) {
					jsonObject.addProperty("msg", "添加失败");
					response.getWriter().write(jsonObject.toString());
				}
			} catch(FavoriteException e) {
				jsonObject.addProperty("msg", e.getMessage());
				response.getWriter().write(jsonObject.toString());	
			}
		} else {
			jsonObject.addProperty("msg", "非法访问");
			response.getWriter().write(jsonObject.toString());
		}
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
