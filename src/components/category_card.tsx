import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";
   
  export function CategoryCard({ title, image }: { title: string, image: string}) {
    return (
      <Card>
        <CardHeader floated={false} className="flex justify-center p-0 m-0 border-0">
          <img src={image} alt="image" className="block w-3/4 m-0 p-0 border-0"/>
        </CardHeader>
        <CardBody className="text-center">
          {title}
        </CardBody>
      </Card>
    );
  }