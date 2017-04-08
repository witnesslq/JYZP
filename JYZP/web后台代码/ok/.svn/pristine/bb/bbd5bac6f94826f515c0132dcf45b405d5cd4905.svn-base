package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.HttpRequestException;
import cn.edu.cqupt.ok.exception.PostException;
import cn.edu.cqupt.ok.exception.ResearchFormException;
import cn.edu.cqupt.ok.po.ResearchForm;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.PostService;
import cn.edu.cqupt.ok.service.ResearchFormService;
import cn.edu.cqupt.ok.service.impl.PostServiceImpl;
import cn.edu.cqupt.ok.service.impl.ResearchFormServiceImpl;
import cn.edu.cqupt.ok.utils.HttpRequest;
import cn.edu.cqupt.ok.utils.JsonUtils;
import cn.edu.cqupt.ok.utils.UrlUtils;

@WebServlet("/ShowPostsByLabelNamePagesServlet")
public class ShowPostsByLabelNamePagesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
      
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ResearchFormService researchFormService = new ResearchFormServiceImpl();
		PostService postService = new PostServiceImpl();
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("User") != null) {
			User user = JsonUtils.getEntity(request.getParameter("User"), User.class);
			try {
				List<ResearchForm> list = researchFormService.showReserchFormByUserId(user);
				if(list.size() == 0) {
					try {
						int pages =  ( postService.showPostCount() + 9 ) / 10;
						jsonObject.addProperty("pages", pages);
						response.getWriter().write(jsonObject.toString());
					} catch (PostException e) {
						jsonObject.addProperty("msg", e.getMessage());
						response.getWriter().write(jsonObject.toString());
					}
				} else {
					String resultWords = null;
					String labelNames = null;
					List<String> labelNamesList = new ArrayList<String>();
					for(int i = 0; i < list.size(); i++) {
						String[] stringArr = list.get(i).getContent().split(",");
						/*
						 * 根据调查问卷结果提取关键字
						 */
						for(int j = 0; j < stringArr.length; j++) {
							if(stringArr[j].contains("熟悉")) {
								String[] seperateArr = stringArr[j].split(":");
								if(labelNames != null) {
									resultWords = seperateArr[0] + ",";
								} 
								else {
									resultWords += seperateArr[0] + ",";
								}
							}
						}
					}
					if(resultWords != null) {
						resultWords = resultWords.substring(0, resultWords.length() - 1);
						String labelApi = UrlUtils.labelExpandWordsUrl();
						try {
							JsonObject outJsonObject = JsonUtils.getJsonObject();
							JsonObject inJsonObject = JsonUtils.getJsonObject();
							outJsonObject.addProperty("apiid", "483");
							inJsonObject.addProperty("content", resultWords);
							inJsonObject.addProperty("label", "null");
							outJsonObject.add("attrs", inJsonObject);
							outJsonObject.addProperty("userid", 197);
							if(!JsonUtils.parseJsonObject(HttpRequest.postRequest(labelApi, outJsonObject)).toString().contains("errmsg")) {
								JsonObject labelJsonObject = JsonUtils.parseJsonObject(HttpRequest.postRequest(labelApi, outJsonObject));
								labelNamesList.add(labelJsonObject.get("result").getAsString());
								for(int j = 0; j < labelNamesList.size(); j++) {
									if(labelNames == null) {
										labelNames = labelNamesList.get(j) + ","; 
									} else {
										labelNames += labelNamesList.get(j) + ",";
									}
								}
							}
						} catch (HttpRequestException e) {
							jsonObject.addProperty("msg", e.getMessage());
							response.getWriter().write(jsonObject.toString());
						}
					}
					if(labelNames != null) {
						try {
							int pages;
							labelNames = labelNames.substring(0, labelNames.length() - 1);
							pages = ( postService.showPostByLabelNameCount(labelNames) + 9 ) / 10;
							jsonObject.addProperty("pages", pages);
							response.getWriter().write(jsonObject.toString());
						} catch (PostException e) {
							jsonObject.addProperty("msg", e.getMessage());
							response.getWriter().write(jsonObject.toString());
						}
					} else {
						jsonObject.addProperty("msg", "非法访问");
						response.getWriter().write(jsonObject.toString());
					}
				}
			} catch (ResearchFormException e) {
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
