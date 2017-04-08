package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.PostKeyException;
import cn.edu.cqupt.ok.service.PostKeyService;
import cn.edu.cqupt.ok.service.impl.PostKeyServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;

@WebServlet("/ShowKeyListPositionFirstTypeServlet")
public class ShowKeyListPositionFirstTypeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PostKeyService postKeyService = new PostKeyServiceImpl();
		JsonObject jsonObject = JsonUtils.getJsonObject();
		try {
			List<String> list = postKeyService.selectKeyListPositionFirstType();
			response.getWriter().write(JsonUtils.EntityToJson(list));
 		} catch(PostKeyException e) {
 			jsonObject.addProperty("msg", e.getMessage());
 			response.getWriter().write(jsonObject.toString());
 		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
