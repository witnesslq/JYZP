package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.PostException;
import cn.edu.cqupt.ok.service.PostService;
import cn.edu.cqupt.ok.service.impl.PostServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;


@WebServlet("/ShowPostsPagesServlet")
public class ShowPostsPagesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
      
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PostService postService = new PostServiceImpl();
		JsonObject jsonObject = JsonUtils.getJsonObject();
		try {
			int pages =  ( postService.showPostCount() + 9 ) / 10;
			jsonObject.addProperty("pages", pages);
			response.getWriter().write(jsonObject.toString());
		} catch(PostException e) {
			jsonObject.addProperty("msg", e.getMessage());
			response.getWriter().write(jsonObject.toString());
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
