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

@WebServlet("/AddOrModifyProfileServlet")
public class AddOrModifyProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("Profile") != null) {
			Profile profile = JsonUtils.getEntity(request.getParameter("Profile"), Profile.class);
			ProfileService profileService = new ProfileServiceImpl();
			try {
				User user = new User();
				user.setUserId(profile.getUserId());
				Profile _profile = profileService.showProfileByUserId(user);
				if(_profile == null) {
					boolean bool = profileService.addProfile(profile);
					if(bool) {
						jsonObject.addProperty("msg", "添加成功");
						response.getWriter().write(jsonObject.toString());
					} else if(!bool) {
						jsonObject.addProperty("msg", "添加失败");
						response.getWriter().write(jsonObject.toString());
					}
					profileService.addProfileHistory(profile);
				} else {
					profile.setProfileId(_profile.getProfileId());
					boolean bool = profileService.modifyProfile(profile);
					if(bool) {
						jsonObject.addProperty("msg", "更新成功");
						response.getWriter().write(jsonObject.toString());
					} else if(!bool) {
						jsonObject.addProperty("msg", "更新失败");
						response.getWriter().write(jsonObject.toString());
					}
					profileService.addProfileHistory(profile);
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
