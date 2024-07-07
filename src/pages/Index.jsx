import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <h1 className="text-4xl font-bold">Discover Our Exclusive Cologne</h1>
        <p className="text-lg text-muted-foreground">Experience the essence of luxury and sophistication.</p>
        <Button onClick={() => navigate("/shop")}>Shop Now</Button>
      </section>

      {/* Featured Products Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((product) => (
            <Card key={product}>
              <CardHeader>
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Cologne {product}</h3>
                <p className="text-muted-foreground">$99.99</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => navigate("/shop")}>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg text-muted-foreground">We are dedicated to bringing you the finest colognes crafted with passion and precision.</p>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
      </section>
    </div>
  );
};

export default Index;