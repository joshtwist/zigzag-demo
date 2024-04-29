import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  role: string;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {

  if (request.user.data.roles.includes(options.role)) {
    return request;
  }

  return new Response(`No way mate, you do not have the right permissions`, { status: 403 });
}
