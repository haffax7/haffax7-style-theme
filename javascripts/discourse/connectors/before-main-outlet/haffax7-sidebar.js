import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  setupComponent(args, component) {
    const routeName = args?.currentRouteName;

    // 글 리스트(discovery) 페이지에서만 사이드바 활성화
    const allowedRoutes = [
      "discovery.latest",
      "discovery.new",
      "discovery.top",
      "discovery.unread",
      "discovery.categories"
    ];

    if (!allowedRoutes.includes(routeName)) {
      // 이 커넥터 자체를 렌더링하지 않음
      return false;
    }

    // 이후 실제 데이터 로직이 들어갈 자리
    // (최근 댓글, 위젯 등)
  },
};
