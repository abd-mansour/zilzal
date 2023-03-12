<div class="album py-5 bg-light">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {earthquakes.map((earthquake, index) => (

<div class="col">
<div class="card shadow-sm">
  
  <div class="card-body">
    <p class="card-text">{earthquake.properties.place}</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group gap-2">
        <button type="button" className={`btn btn-sm ${earthquake.properties.mag < 2 ? "btn-secondary" : earthquake.properties.mag < 3 ? "btn-success" : earthquake.properties.mag >= 3 && earthquake.properties.mag < 4 ? "btn-warning" : earthquake.properties.mag >= 4 && earthquake.properties.mag < 5 ? "btn-danger" : "btn-dark"}`}>
        {earthquake.properties.mag}
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary">تاريخ</button>
        <p className="card-text text-muted">
    التاريخ: {new Date(earthquake.properties.time).toLocaleString()}
  </p>
      </div>
      <small class="text-muted font-bold">{Math.floor((new Date().getTime() - new Date(earthquake.properties.time).getTime()) / (1000 * 60))} دقائق</small>
    </div>
  </div>
</div>
</div>

            ))}

        </div>
    </div>
</div>


return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container py-5">
        <h1 className="text-center text-primary mb-5">تفاصيل الزلزال</h1>
        <div className="row g-4">
          {earthquakes.map((earthquake, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    <FaMapMarkerAlt className="me-2" />
                    {earthquake.properties.place}
                  </h5>
                  <h4 className={`card-text ${earthquake.properties.mag < 3 ? "text-success" : earthquake.properties.mag >= 3 && earthquake.properties.mag < 4 ? "text-warning" : earthquake.properties.mag >= 4 && earthquake.properties.mag < 5 ? "text-danger" : "text-danger"}`}>
                    <FaSignal className="me-2" />
                    الشدة: {earthquake.properties.mag}
                  </h4>
                  <p className="card-text text-muted">
                    <FaClock className="me-2" />
                    الزمن المنقضي: {Math.floor((new Date().getTime() - new Date(earthquake.properties.time).getTime()) / (1000 * 60))} دقائق
                  </p>
                  <p className="card-text text-muted">
                    التاريخ: {new Date(earthquake.properties.time).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

