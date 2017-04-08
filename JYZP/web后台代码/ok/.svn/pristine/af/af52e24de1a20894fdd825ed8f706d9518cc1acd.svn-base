package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.PostException;
import cn.edu.cqupt.ok.po.Post;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.PostService;
import cn.edu.cqupt.ok.service.impl.PostServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;

@WebServlet("/ShowPostsByUserIdServlet")
public class ShowPostsByUserIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("User") != null) {
			User user = JsonUtils.getEntity(request.getParameter("User"), User.class);
			PostService postService = new PostServiceImpl();
			try {
				List<Post> list = postService.showPostsByUserId(user);
				response.getWriter().write(JsonUtils.EntityToJson(list));
			} catch(PostException e) {
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
