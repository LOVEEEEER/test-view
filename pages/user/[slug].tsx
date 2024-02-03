import { User } from "@/src/components/screens/UserPage/User";
import { UsersApi } from "@/src/services/UsersApi/UsersApi";
import { IUser } from "@/src/shared/interfaces/user.interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const UserPage: NextPage<{ user: IUser }> = ({ user }) => {
  return <User user={user} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const users = await UsersApi.getUsers();
    const paths = users.map((user) => ({ params: { slug: user.slug } }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const user = await UsersApi.getUser(String(params?.slug));
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default UserPage;
