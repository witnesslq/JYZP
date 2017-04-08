package cn.edu.cqupt.ok.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.HttpRequestException;
import cn.edu.cqupt.ok.utils.HttpRequest;
import cn.edu.cqupt.ok.utils.JsonUtils;
import cn.edu.cqupt.ok.utils.UrlUtils;

@WebServlet("/ShowKeyListPositionNameServlet")
public class ShowKeyListPositionNameServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("PositionName") != null) {
			try {
				JsonObject outJsonObject = JsonUtils.getJsonObject();
				JsonObject inJsonObject = JsonUtils.getJsonObject();
				outJsonObject.addProperty("apiid", "427");
				inJsonObject.addProperty("content", request.getParameter("PositionName"));
				inJsonObject.addProperty("label", "无");
				outJsonObject.add("attrs", inJsonObject);
				outJsonObject.addProperty("userid", 4);
				if(!JsonUtils.parseJsonObject(HttpRequest.postRequest(UrlUtils.positionNamesWordsUrl(), outJsonObject)).toString().contains("errmsg")) {
					JsonObject postionNameJsonObject = JsonUtils.parseJsonObject(HttpRequest.postRequest(UrlUtils.positionNamesWordsUrl(), outJsonObject));
					String postionNames = postionNameJsonObject.get("content").getAsString();
					String[] postionName = postionNames.split(",");
					response.getWriter().write(JsonUtils.EntityToJson(postionName));
				}
			} catch (HttpRequestException e) {
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