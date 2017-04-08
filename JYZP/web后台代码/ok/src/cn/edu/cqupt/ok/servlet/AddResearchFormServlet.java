package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.ResearchFormException;
import cn.edu.cqupt.ok.po.ResearchForm;
import cn.edu.cqupt.ok.service.ResearchFormService;
import cn.edu.cqupt.ok.service.impl.ResearchFormServiceImpl;
import cn.edu.cqupt.ok.utils.JsonUtils;

@WebServlet("/AddResearchFormServlet")
public class AddResearchFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("ResearchForm") != null) {
			ResearchForm researchForm = JsonUtils.getEntity(request.getParameter("ResearchForm"), ResearchForm.class);
			ResearchFormService ResearchFormService = new ResearchFormServiceImpl();
			try {
				boolean bool = ResearchFormService.addResearchForm(researchForm);
				if(bool) {
					jsonObject.addProperty("msg", "添加成功");
					response.getWriter().write(jsonObject.toString());
				} else if(!bool) {
					jsonObject.addProperty("msg", "添加失败");
					response.getWriter().write(jsonObject.toString());
				}
			} catch(ResearchFormException e) {
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
