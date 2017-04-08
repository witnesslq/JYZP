package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.FavoriteException;
import cn.edu.cqupt.ok.exception.PostException;
import cn.edu.cqupt.ok.po.Favorite;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.FavoriteService;
import cn.edu.cqupt.ok.service.PostService;
import cn.edu.cqupt.ok.service.impl.FavoriteServiceImpl;
import cn.edu.cqupt.ok.service.impl.PostServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;

@WebServlet("/ShowFavoritesByUserIdServlet")
public class ShowFavoritesByUserIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		FavoriteService favoriteService = new FavoriteServiceImpl();
		PostService postService = new PostServiceImpl();
		if(request.getParameter("User") != null) {
			User user = JsonUtils.getEntity(request.getParameter("User"), User.class);
			JsonObject jsonObject = JsonUtils.getJsonObject();
			try {
				List<Favorite> list = favoriteService.selectAllFavoriteByUserId(user);
				if(list.size() != 0) {
					List<Integer> intList = new ArrayList<Integer>();
					for(int i = 0; i < list.size(); i++) {
						intList.add(list.get(i).getPostId());
					}
					try {
						response.getWriter().write(JsonUtils.EntityToJson(postService.selectPostsByPostId(intList)));
					} catch (PostException e) {
						jsonObject.addProperty("msg", e.getMessage());
						response.getWriter().write(jsonObject.toString());
					}
				} else {
					jsonObject.addProperty("msg", "无收藏岗位");
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
