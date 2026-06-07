import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <>
      <div>
        <h1 className="text-center pt-30 text-4xl font-bold mb-4">Shipment at Ease</h1>
        <p className="text-center text-lg text-muted-foreground">
        First Ever platform to proide end-to-end solution for both sellers and delivery-partners
        </p>
      </div>

      <div className="flex display-flex justify-center ">
        <Card className="m-4">
          <CardContent>
            <p className="text-center text-lg text-muted-foreground">
              Shipper is
            </p>
          </CardContent>
        </Card>

        <Card className="m-4">
          <CardContent>
            <p className="text-center text-lg text-muted-foreground">
              Shipper is
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Hero;
