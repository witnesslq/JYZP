package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.ProfileException;
import cn.edu.cqupt.ok.po.Profile;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.ProfileService;
import cn.edu.cqupt.ok.service.impl.ProfileServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;

@WebServlet("/ShowProfileByUserId")
public class ShowProfileByUserId extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("User") != null) {
			User user = JsonUtils.getEntity(request.getParameter("User"), User.class);
			ProfileService profileService = new ProfileServiceImpl();
			try {
				Profile profile = profileService.showProfileByUserId(user);
				if(profile == null) {
					jsonObject.addProperty("msg", "无简历信息");
					response.getWriter().write(jsonObject.toString());
				} else {
					response.getWriter().write(JsonUtils.EntityToJson(profile));
				}
			} catch(ProfileException e) {
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
