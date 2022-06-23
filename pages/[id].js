import { redisClient } from "../db/redis-client";
export default function Home(data) {
  return (
    <div>
      id page
      {JSON.stringify(data)}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  await redisClient.get("key");
  return {
    props: {
      data: params,
    },
  };
};
