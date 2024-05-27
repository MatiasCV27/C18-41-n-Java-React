import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const UserHomeNewsView: React.FC = () => {
  return (
    <Card className="w-[291px] h-full bg-blue-800">
      <CardHeader>
        <CardTitle>Novedades</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default UserHomeNewsView;
