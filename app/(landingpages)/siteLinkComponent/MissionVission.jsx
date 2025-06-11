"use client"

const MissionVision = () => {
    return (
        <div className="relative w-full bg-white py-8 sm:mx-auto sm:max-w-full">
            <div className="mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">
                            Vision
                        </h2>
                        <p className="text-neutral-600 leading-relaxed">
                            To be the trusted experts and leaders in providing evidence based fertility treatments with compassion.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">
                            Mission
                        </h2>
                        <p className="text-neutral-600 leading-relaxed">
                            To offer accessible, affordable, informative, compassionate and quality healthcare for couples hoping to be parents by combining evidence based treatments with the latest advances in medical technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;