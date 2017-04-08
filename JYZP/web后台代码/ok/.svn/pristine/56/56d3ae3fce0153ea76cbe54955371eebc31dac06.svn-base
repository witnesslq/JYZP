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
import cn.edu.cqupt.ok.po.Page;
import cn.edu.cqupt.ok.po.Post;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.PostService;
import cn.edu.cqupt.ok.service.impl.PostServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;


@WebServlet("/ShowPostsServlet")
public class ShowPostsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getParameter("Page") != null || request.getParameter("User") != null) {
			PostService postService = new PostServiceImpl();
			JsonObject jsonObject = JsonUtils.getJsonObject();
			int pageNum = 0;
			if(request.getParameter("Page") != null) {
				Page page = JsonUtils.getEntity(request.getParameter("Page"), Page.class);
				pageNum = page.getCount();
			} else {
				User user = JsonUtils.getEntity(request.getParameter("User"), User.class);
				pageNum = user.getPage();
			}
			if(pageNum > 0) {
				try {
					List<Post> list = postService.showPosts(pageNum);
					response.getWriter().write(JsonUtils.EntityToJson(list));
				} catch(PostException e) {
					jsonObject.addProperty("msg", e.getMessage());
					response.getWriter().write(jsonObject.toString());
				}
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
